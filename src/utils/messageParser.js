class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleWhat() {
    const message = this.createChatBotMessage("I'm not sure what you are asking about. Can you provide more details?");
    this.addMessageToState(message);
  }

  handleHow() {
    const message = this.createChatBotMessage("I can explain how it works. Please provide more context.");
    this.addMessageToState(message);
  }

  handleCreate() {
    const message = this.createChatBotMessage("I was created by a team of developers.");
    this.addMessageToState(message);
  }
  handleCare(){
    const message = this.createChatBotMessage("I am Fine.");
    this.addMessageToState(message);
  }

  handleThanks() {
    const message = this.createChatBotMessage("You're welcome! If you have any more questions, feel free to ask.");
    this.addMessageToState(message);
  }

  handleBye() {
    const message = this.createChatBotMessage("Goodbye! Have a great day.");
    this.addMessageToState(message);
  }

  handleSelf() {
    const message = this.createChatBotMessage("I am a chatbot designed to assist you with various questions and tasks.");
    this.addMessageToState(message);
  }

  handleContact() {
    const message = this.createChatBotMessage("You can contact us via email at support@example.com.");
    this.addMessageToState(message);
  }

  handleWork() {
    const message = this.createChatBotMessage("I'm sorry to hear that something isn't working. Can you provide more details so I can assist you better?");
    this.addMessageToState(message);
  }

  handleHello() {
    const message = this.createChatBotMessage("Hello! How can I assist you today?");
    this.addMessageToState(message);
  }

  handleOkay() {
    const message = this.createChatBotMessage("Okay! Let me know if there's anything else I can help with.");
    this.addMessageToState(message);
  }

  handleDefault() {
    const message = this.createChatBotMessage("I'm not sure I understand. Could you please clarify?");
    this.addMessageToState(message);
  }

  addMessageToState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;