// import React, { useEffect, useState } from 'react';
// import { fetchCustomerNotifications } from "../../apis/api/notification/notification";
//
// const Notification = ({customerId}) => {
//   const [notifications, setNotifications] = useState([]);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchCustomerNotifications(customerId);
//         setNotifications(data);
//       } catch (error) {
//       }
//     };
//
//     fetchData();
//   }, [customerId]);import React, { useEffect, useState } from 'react';
// // import { fetchCustomerNotifications } from "../../apis/api/notification/notification";
// //
// // const Notification = ({customerId}) => {
// //   const [notifications, setNotifications] = useState([]);
// //
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const data = await fetchCustomerNotifications(customerId);
// //         setNotifications(data);
// //       } catch (error) {
// //       }
// //     };
// //
// //     fetchData();
// //   }, [customerId]);
// //
// //   return (
// //       <div>
// //         <ul>
// //           {notifications?.map(notification => (
// //               <li key={notification.id}>
// //                 <p>고객사번호: {notification.customerId}</p>
// //                 <p>알림번호: {notification.id}</p>
// //                 <p>알림내용: {notification.contents}</p>
// //                 <p>읽음상태: {notification.isRead ? '읽음' : '읽지 않음'}</p>
// //                 <p>생성날짜: {notification.date}</p>
// //               </li>
// //           ))}
// //         </ul>
// //       </div>
// //   );
// // };
// //
// // export default Notification;
//
//   return (
//       <div>
//         <ul>
//           {notifications?.map(notification => (
//               <li key={notification.id}>
//                 <p>고객사번호: {notification.customerId}</p>
//                 <p>알림번호: {notification.id}</p>
//                 <p>알림내용: {notification.contents}</p>
//                 <p>읽음상태: {notification.isRead ? '읽음' : '읽지 않음'}</p>
//                 <p>생성날짜: {notification.date}</p>
//               </li>
//           ))}
//         </ul>
//       </div>
//   );
// };
//
// export default Notification;