import fetch from 'cross-fetch'

function defaultUrlFilter(url, _videoID, _serviceName, _options) {
  return url;
}

const graphQuery = {
  query:"query EmbedBibleViewerQuery(  $token: String  $reference: String  $notesPageSize: Int!  $myNotesPageSize: Int!  $myNoteID: String  $crossReferencesPageSize: Int!) {  viewer(token: $token) {    ...BibleWidget_viewer    ...MyNotes_viewer    authenticated    bibleChapter(id: $reference) {      ...BibleWidget_bibleChapter      id    }    bibleVerse(id: $reference) {      ...BibleWidget_bibleVerse      ...MyNotes_verse      id    }    userNotes(first: $myNotesPageSize) {      edges {        node {          id          __typename        }        cursor      }      ...MyNotes_userNotes      pageInfo {        endCursor        hasNextPage      }    }    userNote(id: $myNoteID) {      ...MyNotes_userNote      id    }  }}fragment BibleWidget_viewer on Viewer {  ...BibleVerse_viewer  ...FocusedBibleVerse_viewer  id}fragment MyNotes_viewer on Viewer {  id  authenticated  ...Editor_viewer}fragment BibleWidget_bibleChapter on BibleChapter {  id  url  reference  nextChapter {    id    reference  }  previousChapter {    id    reference  }  verses(first: 200) {    edges {      node {        ...BibleVerse_verse        id        verseNumber        body      }    }  }}fragment BibleWidget_bibleVerse on BibleVerse {  ...FocusedBibleVerse_verse  previous {    reference    id  }  next {    reference    id  }}fragment MyNotes_verse on BibleVerse {  id  reference  quote}fragment MyNotes_userNotes on UserNoteConnection {  edges {    node {      id      title      verse {        id        reference      }      tags      created_at      updated_at    }  }}fragment MyNotes_userNote on UserNote {  ...Editor_note  id  title  body  tags_string  verse {    id    reference  }  created_at  updated_at}fragment Editor_note on UserNote {  id  title  body}fragment FocusedBibleVerse_verse on BibleVerse {  id  reference  body  verseNumber  chapterNumber  chapterURL  crossReferences(first: $crossReferencesPageSize) {    edges {      node {        id        ...CrossReference_reference      }    }  }  book {    id    title  }  notes(first: $notesPageSize) {    pageInfo {      hasNextPage    }    edges {      node {        id        title        body        ...BibleNote_note      }    }  }}fragment CrossReference_reference on CrossReference {  id  reference  verses {    edges {      node {        id        reference        body      }    }  }}fragment BibleNote_note on Note {  ...NoteThumbnail_note  id}fragment NoteThumbnail_note on Note {  id  created_at  title  tags  author {    name    id  }  verse {    id    body    reference    url    notesCount    verseNumber    quote  }}fragment BibleVerse_verse on BibleVerse {  id  body  verseNumber  reference}fragment Editor_viewer on Viewer {  id  authenticated}fragment BibleVerse_viewer on Viewer {  id  authenticated}fragment FocusedBibleVerse_viewer on Viewer {  id  ...BibleNote_viewer}fragment BibleNote_viewer on Viewer {  ...NoteThumbnail_viewer  id}fragment NoteThumbnail_viewer on Viewer {  authenticated}",
  variables:{"token":null,"reference":"Philippians 4:2","notesPageSize":0,"myNotesPageSize":0,"myNoteID":null,"crossReferencesPageSize":0}
}

class HtmlElementServiceBase {

  constructor(name, options, env) {
    this.name = name;
    this.options = Object.assign(this.getDefaultOptions(), options);
    this.env = env;
  }

  getDefaultOptions() {
    return {};
  }

  extractVideoID(reference) {
    return reference;
  }

  getVideoUrl(_videoID) {
    throw new Error("not implemented");
  }

  getFilteredVideoUrl(videoID) {
    let filterUrlDelegate = typeof this.env.options.filterUrl === "function"
        ? this.env.options.filterUrl
        : defaultUrlFilter;
    let videoUrl = this.getVideoUrl(videoID);
    return filterUrlDelegate(videoUrl, this.name, videoID, this.env.options);
  }

  getEmbedCode(videoID) {
    let containerClassNames = [];
    if (this.env.options.containerClassName) {
      containerClassNames.push(this.env.options.containerClassName);
    }

    let escapedServiceName = this.env.md.utils.escapeHtml(this.name);
    containerClassNames.push(this.env.options.serviceClassPrefix + escapedServiceName);

    return this.getRequest(videoID, containerClassNames)
  }

  getRequest(videoID, containerClassNames){
    return this.request(videoID, containerClassNames).then(function(json){

        return `<blockquote class="${containerClassNames.join(" ")}">`
           + `<span>${json.data.viewer.bibleVerse.reference}</span>`
           + `&mdash;`
           + `<span>${json.data.viewer.bibleVerse.body}</span>`
         + `</blockquote>`;
      })
  }

   request(videoID, containerClassNames){
      return this.graphqlFetch(graphQuery.query, graphQuery.variables)
      .then(function(response){return response.json()})
      
    }

  graphqlFetch(query, variables){
  return fetch("http://bible.exchange/graphql",{
        method: "POST",
        headers: {
            "Authorization": "Bearer null", //+ auth.getToken(),
            "Accept": "*/*",
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            query: query,
            variables,
        })
    } )
}

}


module.exports = HtmlElementServiceBase;
