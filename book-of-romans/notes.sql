INSERT INTO `courses` (`library_id`, `bible_verse_id`, `title`, `description`, `image`, `user_id`, `public`) VALUES
(2, 44001001, 'The Book of Romans', 'A verse by verse look at the Book of Romans.', NULL, 1, 1);

INSERT INTO `lessons` (`course_id`, `order_by`, `title`, `summary`) VALUES
($course_id, 1, 'Introduction to Romans', 'This is a summary of our study of the Book of Romans.'),
($course_id, 2, 'Romans Chapter 1 Study Questions', 'Romans Chapter 1 Study Questions');

INSERT INTO `notes` (`type`, `user_id`, `body`, `bible_verse_id`) VALUES 
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/001_cover.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/002_introduction-to-romans.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/100_chapters-1.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/200_chapters-2.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/300_the-law-in-right-perspective-introduction.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/301_absoluteness-of-the-law.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/302_unbending-authority-of-the-law.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/303_true-purpose-of-the-law.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/304_establishing-the-law.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/400_faith-grace-and-justification.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/403_god-will-fulfill-his-promise.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/500_introduction-to-chapters-5-through-8.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/501_grace-reigns-through-jesus.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/600_grace-reigns-in-servants-of-righteousness.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/700_introduction-to-romans-7.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/701_married-to-another.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/702_law-holy-just-good.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/703_pauls-captivity-to-the-law-of-sin.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/704_addtional-chapter-7-thoughts-scratchpad.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/.md"}', 45001001),
('GITHUB', 1, '{"raw_url":"https://raw.githubusercontent.com/bibleexchange/courses/master/book-of-romans/.md"}', 45001001);


INSERT INTO `lesson_note` (`note_id`, `lesson_id`, `order_by`) VALUES
(__NOTEID__, __LESSONID__,  1),
(__NOTEID__, __LESSONID__,  2),
(__NOTEID__, __LESSONID__,  3),
(__NOTEID__, __LESSONID__,  4),
(__NOTEID__, __LESSONID__,  5),
(__NOTEID__, __LESSONID__,  6),
(__NOTEID__, __LESSONID__,  7),
(__NOTEID__, __LESSONID__,  8);
