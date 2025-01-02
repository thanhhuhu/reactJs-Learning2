// class component
// function component
import React from 'react';
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    //JSX
    // state ={
    //     name :'Thanh',
    //     address:'Danang ',
    //     age:22
    // };
    // handleClick = (event) => {
    //     // console.log('>>Click me my button')
    //     // console.log("click me");
    //     // console.log("my name is" + this.state.name);
    //     // console.log("random", Math.floor(Math.random() * 100) + 1);
    //     this.setState({
    //         name: ' Chau',
    //         age: Math.floor(Math.random() * 100) + 1
    //     })
    state ={
        listUser:  [
            {id:1, name: "thanh", age: "16"},
            {id:2, name: "chau", age: "21"},
            {id:3, name: "dung", age: "23"},

        ]
    }
    handleAddNewUser=(userObject)=>{
        // cách 1
        let listUserNew =this.state.listUser;
        listUserNew.push(userObject);
        this.setState({
            listUser: listUserNew
        })

        // cách 2
        // cập nhật tên và tuổi vào bảng tiếp sau khi nhấn submit
        // this.setState({
        //     // dấu 3 chấm là để copy toàn bộ mảng từ trước,
        //     listUser: [userObject,...this.state.listUser]
        // })
    }

    handleDeleteUser=(userID)=>{
        let listUserClone = [this.state.listUser];
        listUserClone = listUserClone.filter(item =>item.id !== userID);
        this.setState({
            listUser: listUserClone
        })
    }
    //JSX
    render() {
        const test = 'thanh'
        //Dry: dont repeat yourself
        return (
            <>
                {/*in trực tiếp kiểu string ra màn hình */}
                {test}
                {JSON.stringify(test)}
                <div className="a">
                    <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                    <br/><br/>
                    <DisplayInfor
                        listUser={this.state.listUser}
                        // users = {this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b">

                </div>
            </>
        )
    }
}

export default MyComponent;