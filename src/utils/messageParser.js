class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("what")&&lowercase.includes("is")) {
        this.actionProvider.handleWhat();
      }
      else if (lowercase.includes("how")&&lowercase.includes("work")) {
        this.actionProvider.handleHow();
      }
      else if (lowercase.includes("who")&&((lowercase.includes("created"))||(lowercase.includes("made")))) {
        this.actionProvider.handleCreate();
      }
      else if (lowercase.includes("thank you")||lowercase.includes("thanks")) {
        this.actionProvider.handleThanks();
      }
      else if (lowercase.includes("goodbye")||lowercase.includes("bye")) {
        this.actionProvider.handleBye();
      }
      else if (lowercase.includes("what")&&((lowercase.includes("do"))||(lowercase.includes("can")))&&lowercase.includes("you")) {
        this.actionProvider.handleSelf();
      }
      else if (lowercase.includes("contact")) {
        this.actionProvider.handleContact();
      }
      else if (((lowercase.includes("doesn't"))||(lowercase.includes("does not"))||(lowercase.includes("don't"))||(lowercase.includes("do not")))) {
        this.actionProvider.handleWork();
      }
      else if (lowercase.includes("hello")) {
        this.actionProvider.handleHello();
      }
      else if (lowercase.includes("okay")) {
        this.actionProvider.handleOkay();
      }
      else{
        this.actionProvider.handleDefault();
      }

    }
  }
  
  export default MessageParser;
  