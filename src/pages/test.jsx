import React from "react";

export default function test() {
  function addTest(e) {
    e.preventDefault();
    const test_form = new FormData(e.target);
    console.log(test_form);
    axios({
      method: "post",
      url: "http://localhost:8000/api/insert_course",
      data: test_form,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <form onSubmit={addTest}>
      <input type="text" name="input_1" />
      <input type="text" name="input_2" />
      <input type="text" name="input_3" />
      <input type="submit" value="Submit" />
    </form>
  );
}
