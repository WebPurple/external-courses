const BOOK_HEADER_CLASS = "book-name";
const SEARCH_INPUT_ID = "search";
const ADD_BOOK_ID = "add-book-butt";
const RATING_FILTER_ID = "rating-filter";
const ALL_BOOK_FILTER_ID = "all-filter";
const HISTORY_BUTTON_ID = "history-button";
const BROWSE_BUTTON_ID = "browse-button";
const RED_BAR_ID = "red-bar";
const GREEN_BAR_ID = "green-bar";
const BLUE_BAR_ID = "blue-bar";
const ADD_TAG_BUTTON_ID = "tag-add-button";
const SET_TAG_BUTTON = "set-book-tag";

var currentBookList = bookList;
var currentFilter = new AllBookFilter();
var currentTag = new AllBookFilter();


addTagArray(tagList);

addBookArray(bookList);

setAsSearch(document.getElementById(SEARCH_INPUT_ID), BOOK_HEADER_CLASS);

setAddBookFeature(document.getElementById(ADD_BOOK_ID));

setAsRatingFilter(document.getElementById(RATING_FILTER_ID));

setAsAllBookFilter(document.getElementById(ALL_BOOK_FILTER_ID));

setAsHistoryButton(document.getElementById(HISTORY_BUTTON_ID));

setAllBooksAsInfoCallable(document.querySelectorAll(".book-present img"));

setAsBrowseButton(document.getElementById(BROWSE_BUTTON_ID));

setAsBar(document.getElementById(RED_BAR_ID));
setAsBar(document.getElementById(GREEN_BAR_ID));
setAsBar(document.getElementById(BLUE_BAR_ID));

setAsAddTagButt(document.getElementById(ADD_TAG_BUTTON_ID));
setAsAdderTagToBook(document.getElementById(SET_TAG_BUTTON));

