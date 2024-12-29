import React from 'react';

class DisplayInfor extends React.Component {
    //destructuring array/object
    //Props => viết tắt properties
    render (){
        //nhanh hơn và gọn hơn
        const {listUser} = this.props; //object
        console.log(listUser);
        //const listUser = this.props.listUser;
        return (
            <div>
                {/*Sử dụng vòng lặp để hiện thị các phần tử bên trong array nhanh hơn thay vì ghi từng cái */}
                {listUser.map((user, index) =>{
                    console.log(index);
                    console.log(user)
                    return (
                        <div key={user.id}>
                            <div>My name 's {user.name}</div>
                            <div>Im' {user.age} </div>
                            <hr/>
                        </div>
                    )
                })}
                {/*<div>My name is {name}</div>*/}
                {/*<div>My age is {age}</div>*/}
                {/*<hr/>*/}
                {/*<div>My name is {name}</div>*/}
                {/*<div>My age is {age}</div>*/}
                {/*<hr/>*/}
                {/*<div>My name is {name}</div>*/}
                {/*<div>My age is {age}</div>*/}
            </div>
        )
    }
}

export default DisplayInfor;
