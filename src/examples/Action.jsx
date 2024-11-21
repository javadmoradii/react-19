const submitData = async (userData) => {
    const newUser = {
        username: userData.get('username'),
        email: userData.get('email')
    }
    console.log(newUser)
}

const Action = () => {
    return <>
    <h3 className='mb-2'>Action example</h3>
    <form action={submitData} className='flex flex-col gap-2'>
        <div className='flex justify-between'>
            <label>User Name</label>
            <input className='ms-2 border p-1' type="text" name="username" id="username" placeholder='Enter username'/>
        </div>
        <div className='flex justify-between'>
            <label>Email</label>
            <input className='ms-2 border p-1' type="text" name="email" id="email" placeholder='Enter email'/>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
}

export default Action;