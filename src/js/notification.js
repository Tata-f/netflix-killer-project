import Notice from "@ouduidui/notice";

const errorMsg = new Notice();

const errorMsgStyles = {
      text: 'Search result not successful. Enter the correct movie name',
    type: 'warning',
  showClose: true,
  };

  export { errorMsg, errorMsgStyles };