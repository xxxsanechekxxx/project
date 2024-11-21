const baseURL =     "https://api.telegram.org/bot8178952651:AAELWc4jcQH_s_WG7rtkYMxUwdp2HzS-Uf8/"

const sendMessage = async (message: string): Promise<void> => {
    const url = `${baseURL}sendMessage?chat_id=-1002175438100&text=${message}`

    const response = await fetch(url);

    console.log('response', response)
}

export default sendMessage;