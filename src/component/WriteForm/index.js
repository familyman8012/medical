import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const db = firebase.firestore();

function form() {
  const dataArray = [];
  const [sendForm, setSendForm] = useState({
    userName: "",
    title: "",
    body: "",
  });
  const [firebaseData, setfirebaseData] = useState([]);

  useEffect(async () => {
    onLoadData();
  }, []);

  const onLoadData = () => {
    db.collection("post")
      //   .where("title", "==", "첫글")  특정검색 get 전에 where 로 조건준다.
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = {
            id: doc.id,
            value: doc.data(),
          };
          dataArray.push(data);
        });
        setfirebaseData(dataArray);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const handlerSend = () => {
    db.collection("post")
      .add(sendForm)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id, "doc?", docRef);
        setSendForm({ title: "", body: "" });
        onLoadData();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handlerDelete = (id) => {
    db.collection("post")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        onLoadData();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  console.log(firebaseData);
  return (
    <div style={{ width: "800px", margin: "50px auto" }}>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={sendForm.userName}
          onChange={(e) =>
            setSendForm({ ...sendForm, userName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="제목"
          value={sendForm.title}
          onChange={(e) => setSendForm({ ...sendForm, title: e.target.value })}
        />
        <textarea
          style={{
            display: "block",
            width: "500px",
            height: "300px",
            margin: "20px 0 50px 0",
          }}
          placeholder="내용"
          value={sendForm.body}
          onChange={(e) => setSendForm({ ...sendForm, body: e.target.value })}
        />
        <button onClick={handlerSend}>전송</button>
      </div>
      <hr />
      <h5>등록된 글 리스트</h5>
      {firebaseData.length > 0 &&
        firebaseData.map((el) => (
          <div key={el.id} style={{ margin: "2d0px 0 0" }}>
            <div>{el.value.userName}</div>
            <span>{el.value.title}</span>
            <span>{el.value.body}</span>
            <button onClick={() => handlerDelete(el.id)}>삭제</button>
          </div>
        ))}
    </div>
  );
}

export default form;
