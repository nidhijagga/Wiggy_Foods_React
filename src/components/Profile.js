import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {}
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nidhijagga");
    const json = await data.json();
    // console.log(json);
    console.log("componentDidMount");
    this.setState({
        userInfo : json
    })
  }

  render() {
    console.log("render");
    const {userInfo} = this.state;
    console.log(userInfo)
    return (
      <div>
        <h1>Profile</h1>
        <h2>Name : {userInfo.name}</h2>
        <img src={userInfo.avatar_url} alt="" />
        <h4>Bio : {userInfo.bio}</h4>
      </div>
      //   <div>
      //     <h1>Profile</h1>
      //     <p>Name : {this.props.name}</p>
      //     <p>Count : {this.state.count}</p>
      //     <button
      //       onClick={() => {
      //         this.setState({
      //           count: this.state.count + 1,
      //         });
      //       }}
      //     >
      //       setCount
      //     </button>
      //     <button
      //     onClick={()=>{
      //         this.setState({
      //             count : 0
      //         })
      //     }}>Reset</button>
      //   </div>
    );
  }
}

export default Profile;
