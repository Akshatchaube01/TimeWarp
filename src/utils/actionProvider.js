class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Hello, Welcome to TimeWarp Website!");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleWhat = () => {
      const message = this.createChatBotMessage("TimeWarp is an opensource webapp that allows users to explore historical versions of their current location virtually");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleHow = () => {
      const message = this.createChatBotMessage("Using augmented reality and historical maps, users can see how their surroundings looked in different time periods and learn about the history of the area. You can learn more in the demo section.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleCreate = () => {
      const message = this.createChatBotMessage("This was created by Akshat Chaube, Himank Gupta, Naman Gupta and Shreya Prasad.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleThanks = () => {
      const message = this.createChatBotMessage("You're welcome!");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleBye = () => {
      const message = this.createChatBotMessage("Goodbye, Have a great day!");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleSelf = () => {
      const message = this.createChatBotMessage("I can tell you more about this project. What would you like to know?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleContact = () => {
      const message = this.createChatBotMessage("You can get contact information in the footer, or leave a message in the contact section.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleWork = () => {
      const message = this.createChatBotMessage("Please wait as more functionalities are added. In the meantime, you can leave your comments in the contact section and check out our GitHub (link in footer). Thank you for your patience!");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleOkay = () => {
      const message = this.createChatBotMessage("Anything else I can help you with?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    handleDefault = () => {
      const message = this.createChatBotMessage("Please rephrase your query.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
    
  }
  
  export default ActionProvider;
  