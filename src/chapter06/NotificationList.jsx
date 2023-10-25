import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정 알려드립니다",
    },
    {
        id: 2,
        message: "점심식사 시간입니다",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications: [],      // 빈 배열(앞으로 사용할 데이터)을 state 에 넣어서 초기화
        };
    }

    componentDidMount(){
        const { notifications } = this.state;
        timer = setInterval(() =>{                                      // 1초마다 하위 작업 수행
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({                                         // state를 업데이트하기 위함
                    notifications: notifications,
                });
            } else{
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} />;
                })}
            </div>
        )
    }   
}

export default NotificationList;