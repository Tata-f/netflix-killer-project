import Notice from "@ouduidui/notice";

const errorMsg = new Notice();

const errorUserMsgStyles = {
      text: 'Search result not successful. Enter the correct movie name!',
    type: 'warning',
};

const errorUserEmptyQueryStyles = {
  text: 'Search field is empty. Enter the correct movie name or its part!',
type: 'warning',
};
  

const errorServerMsgStyles = {
      text: 'Оops! Something went wrong, please try again later.',
    type: 'info',
  };

  export { errorMsg, errorUserMsgStyles, errorUserEmptyQueryStyles, errorServerMsgStyles};