import {useOptimistic, useState} from "react";

const Optimistic = () => {

  const [messages, setMessages] = useState([
    {text: "initial message!", sending: false, key: 1},
  ]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  const sendFormData = async (formData) => {
    const sentMessage = await fakeDelayAction(formData.get("message"));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  const fakeDelayAction = async (message) => {
    await new Promise((res) => setTimeout(res, 1500));
    return message;
  }

  const submitData = async (userData) => {
    addOptimisticMessage(userData.get("username"));

    await sendFormData(userData);
  };

  return (
    <>
      
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}

      <form action={submitData}>
        <div className='mt-1.5'>
          <label htmlFor="username">Username:</label>
          <input className='ms-2 border p-1' type="text" name="username" id="username" placeholder='Enter message'/>
        </div>
        <button className='border bg-blue-400 text-white my-1.5' type="submit">Submit</button>
      </form>
    </>
  );
};

export default Optimistic;
