<%@ language="javascript"%>
<%

CurQ = Request.Form("CurQ")
Answ = Request.Form("Answ")
correct=Request.Form("Correct")
wrong=Request.Form("Wrong")
 
'Poor Man's IsNull Code goes here
 
If PoorMansIsNull(CurQ) Then           
        CurQ = 1                            
        correct = 0
        wrong = 0
End If
 
If PoorMansIsNUll(Answ) Then
        CurQ = CurQ + 1
        If CurQ > (Your maximum number of questions) Then
%>
        <p>Congratulations. You have completed this test. You missed <%=wrong%> 
questions,
        but got <%=correct%> questions right. That is equivilent to a 
<%=(correct/(max#ofQs)%>%.
        Thank you for doing the test.
<% End If %>
 
<%
    Set MyConn = Server.CreateObject("ADODB.Connection") 
    MyConn.Open "DSN=MyDSN;UID=Admin;PWD=Test" 
    conntemp.Open myDSN
    mySQL = "SELECT * FROM QUESTIONS WHERE QuestionID=" & CurQ
    set rsTemp= conntemp.Execute(mySQL)
%>
 
 <h2>Question Number <%=rsTemp("QuestionID")%> </h2>
 
 <form method=POST action="myASP.ASP">
    <input type=hidden name=CurQ value=<%=CurQ%>>
 Your question is <%=rsTemp("Question")%><br>
 Answer:
        <select name="AnsW">
                <option value=1><%=rsTemp("AnswerA")</option>
                <option value=2><%=rsTemp("AnswerB")</option>
                <option value=3><%=rsTemp("AnswerC")</option>
                <option value=4><%=rsTemp("AnswerD")</option>
         </select>    
 <input type=hidden value="<%=correct%>"><input type=hidden value="<%=wrong%>">
 <input type=reset value="Clear the Form"><input type=submit value="OK!">
 </form>
 
<% Else %>
<%
    Set MyConn = Server.CreateObject("ADODB.Connection") 
    MyConn.Open "DSN=MyDSN;UID=Admin;PWD=Test" 
    conntemp.Open myDSN
    mySQL = "SELECT * FROM QUESTIONS WHERE QuestionID=" & CurQ
    set rsTemp= conntemp.Execute(mySQL)
             If AnsW = rsTemp("CorrectAns") Then
%>
 
                <p>Congratulations. You got it right. Whee</p>
                <% correct = correct + 1 %>
 
             <% Else %>
 
                <p>I'm sorry, you missed the question. You can review by 
reading: </p>
                <p><%=rsTemp("reference")</p>
                <% wrong = wrong + 1 %>
 
             <% End If %>
 
      <form method=POST action="ASP.ASP">
              <input type="hidden" name=curQ value="<%=curQ%>">
              <input type="hidden" name=correct value="<%=correct%>">
              <input type="hidden" name=wrong value="<%=wrong%>">
              <input type="submit" value="Next Question"%>
      </form>
 
<% End If %>
 
<form method="get" action="simpleform.asp">
First Name: <input type="text" name="fname" /><br />
Last Name: <input type="text" name="lname" /><br /><br />
<input type="submit" value="Submit" />
</form>





