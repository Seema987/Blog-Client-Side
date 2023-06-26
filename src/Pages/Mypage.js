import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Mypage = () => {
    return (
        <div className='single'>
            <div className="content">
            <img src="https://images.unsplash.com/photo-1617972882867-3707f274c115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            <div className="user">
            <img src="https://images.unsplash.com/photo-1617972882867-3707f274c115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            
            <div className="info">
                <span>Seema</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={'/article?edit=2'}>
                <button>Edit</button>
                </Link>
                <button>Delete</button>
            </div>
            </div>
            <h1>hgdyf adsygfaysd ygdsf yugduf </h1>
            <p>hbsdafbcsd  hdgcfsdf yudgsb gsdacv hygbdsc vuysd vyygfvs ygaf dygschv ydgc iudbjsc ygbdshfc uidsjc hbsdafbcsd  hdgcfsdf yudgsb gsdacv hygbdsc vuysd vyygfvs ygaf dygschv ydgc iudbjsc ygbdshfc uidsjc hbsdafbcsd  hdgcfsdf yudgsb gsdacv hygbdsc vuysd vyygfvs ygaf dygschv ydgc iudbjsc ygbdshfc uidsjc hbsdafbcsd  hdgcfsdf yudgsb gsdacv hygbdsc vuysd vyygfvs ygaf dygschv ydgc iudbjsc ygbdshfc uidsjc hbsdafbcsd  hdgcfsdf yudgsb gsdacv hygbdsc vuysd vyygfvs ygaf dygschv ydgc iudbjsc ygbdshfc uidsjc hbsdafbcsd  hdgcfsdf yudgsb gsdacv hygbdsc vuysd vyygfvs ygaf dygschv ydgc iudbjsc ygbdshfc uidsjc hbsdafbcsd  hdgcfsdf yudgsb gsdacv hygbdsc vuysd vyygfvs ygaf dygschv ydgc iudbjsc ygbdshfc uidsjc</p>
            </div>
            <Menu />
        </div>
        
    )
}

export default Mypage



