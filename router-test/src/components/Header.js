import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import CatSixLogo from 'img/CatSix.jpg';
import MyPageLogo from 'img/MyPageLogo.jpg';

<<<<<<< HEAD
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            result: null
        }
    }
    
    componentDidMount() {
        //소속 그룹 가져오기
        fetch("http://180.71.228.163:8080/viewTeams?clientID="
        ,{body: "sphong5911"}
        )
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.data,
                        result: result.result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
            .then(function (response){
                console.log(response);
            })
    }
=======

// class PopupZ extends Component {
//     render() {
//         return (
//             <div className='popup'>
//                 <div className='popup_inner'>
//                     <h3>{this.props.text}</h3>
//                     <input type="text" width="100px"></input>
//                     <div>
//                         <button onClick={this.props.closePopup}>Create</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

class Header extends Component {
    // constructor(){
    //     super();
    //     this.state={showPopup:false};
    // }
    // togglePopup() {
    //     this.setState({
    //       showPopup: !this.state.showPopup
    //     });
    // }
>>>>>>> 859a41620aacea8aea18cfdcf139b38e23494bda

    LogoutPopup(){
        alert('로그아웃 되었습니다!');
        window.location='/';
    }

    CreateGroup =()=>{
        window.location='/createGroup';
    }

    render(){
        const { error, isLoaded, data } = this.state;
        return(
            <div className="head">
                <NavLink to="/" > 
                <img src={CatSixLogo} className="CatSixLogoStyle"/>
                </NavLink>
                <div className="dropdown" >
                <img src={MyPageLogo} className="MyPageLogoStyle"/>
                    <div className="dropdown-content">
                        <NavLink to="/mypage">회원정보 수정</NavLink>
                        <button className="a" onClick={this.LogoutPopup}>로그아웃</button>
                        <hr />
    
                        <div className="group_invite">
                          <p className="groups_bar">Groups</p>
                          <button className="add_btn" title="그룹 생성" onClick={this.CreateGroup}>+</button>
                        </div>
                        
                        <section>
                            {data.team_name}
                        </section>
                        
                        <NavLink to="/">group1</NavLink>
                        <NavLink to="/">group2</NavLink>
                        <NavLink to="/">group3</NavLink>    
                        <hr />
                        
                        <NavLink to="/dropOut">회원탈퇴</NavLink>
                    </div>
                </div>
                <hr />
            </div>
           
        );
    }
}

export default Header