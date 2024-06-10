class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Hello.Welcome to TimeWarp Website?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  