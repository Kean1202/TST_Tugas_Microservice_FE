import React, {useState, useEffect} from "react"
import api from "./api"

const App =() => {
  const [user, setUser] = useState([])
  const [userFormData, setUserFormData] = useState({
    user_id: 0,
    username: "",
    password_preprocessed: "",
    name: "",
    disabled: false
  })

  const [speeches, setSpeeches] = useState([])
  const [speechFormData, setSpeechFormData] = useState({
    speech_id: 0,
    student_id: 0,
    student_name: "",
    speech_topic: "",
    speech_date: "",
    argument_1: "",
    argument_1_quality: 0,
    argument_2: "",
    argument_2_quality: 0,
    substance_1: "",
    substance_1_quality: 0,
    substance_2: "",
    substance_2_quality: 0,
    structure_type: "",
    structure_quality: 0,
    mannerism_confidence: 0,
    mannerism_voice: 0
  })

  const fetchSpeeches = async () => {
    const response = await api.get('/speeches')
    setSpeeches(response.data)
  }

  useEffect(() => {
    fetchSpeeches();
  }, []);

    return(
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Speech ID</th>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Topic</th>
            <th>Date</th>
            <th>1st Argument</th>
            <th>Quality</th>
            <th>2nd Argument</th>
            <th>Quality</th>
            <th>Substance 1</th>
            <th>Quality</th>
            <th>Substance 2</th>
            <th>Quality</th>
            <th>Structure</th>
            <th>Quality</th>
            <th>Confidence Quality</th>
            <th>Voice QUality</th>
          </tr>
        </thead>

        <tbody>
          {speeches.map((speech)=>(
            <tr key={speech.student_id}>
              <td>{speech.student_name}</td>
              <td>{speech.speech_topic}</td>
              <td>{speech.speech_date}</td>
              <td>{speech.argument_1}</td>
              <td>{speech.argument_1_quality}</td>
              <td>{speech.argument_2}</td>
              <td>{speech.argument_2_quality}</td>
              <td>{speech.substance_1}</td>
              <td>{speech.substance_1_quality}</td>
              <td>{speech.substance_2}</td>
              <td>{speech.substance_2_quality}</td>
              <td>{speech.structure_type}</td>
              <td>{speech.structure_quality}</td>
              <td>{speech.mannerism_confidence}</td>
              <td>{speech.mannerism_voice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}


export default App;
