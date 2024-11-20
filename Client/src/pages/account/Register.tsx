import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerService } from "../../utils/registration.service"

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()
  return (
    <div>
      <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
      <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="text" placeholder="phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <button onClick={async () => {
        if (!username || !password || !phone) {alert("some data is missing"); return;}
        const [s, e] = await registerService({username, password, phone})
            if (!s){
                alert(e); return;
            }
            alert("succeeded")
            navigate('/account/login')
      }}>Register</button>
    </div>
  )
}

export default Register