import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const datacontext = createContext();

const Mycontextprovider = ({ children }) => {




    const [Error, setError] = useState('null');

    const [cowsdata, setcowsdata] = useState([]);
    const [allcowsdata, setallcowsdata] = useState([]);
    const [cowsbirthdata, setcowsbirthdata] = useState([]);
    const [medicalexamdata, setmedicalexamdata] = useState([]);
    const [allmedicaldata, setallmedicaldata] = useState([]);
    const [Milkdata, setMilkdata] = useState([]);
    const [allmilkdata, setallmilkdata] = useState([]);
    const [totalPageCows, setTotalPageCows] = useState(0);
    const [totalPageCowsBirth, setTotalPageCowsBirth] = useState(0);
    const [totalPageMedicalExam, setTotalPageMedicalExam] = useState(0);
    const [totalPageMilk, setTotalPageMilk] = useState(0);

    //get cows data with page
    const getcowsdata = async (page) => {
        try {
            const cowsresult = await axios.get(`https://dairy-company-server.onrender.com/cow?page=${page}`);
            setcowsdata(cowsresult.data.data);
            setTotalPageCows(cowsresult.data.totalPages)
        }
        catch (err) {
            console.log(err)
            setError(err);
        }

    }
    //get all cows data
    const getallcowsdata = async () => {
        try {
            const allcowsresult = await axios.get(`https://dairy-company-server.onrender.com/cow/all`);
            setallcowsdata(allcowsresult.data.data);
        }
        catch (err) {
            console.log(err)
            setError(err);
        }
    }
    //getbirth
    const getcowsbirthdata = async (page=1) => {
        try {
            const cowsbirthresult = await axios.get(`https://dairy-company-server.onrender.com/cow/cowbirth?page=${page}`);
            setcowsbirthdata(cowsbirthresult.data.data);
            setTotalPageCowsBirth(cowsbirthresult.data.totalPages);
        }
        catch (err) {
            setError(err);
            console.log(err)
        }
    }
    // get medical exam
    const getmedicalexamdata = async (page) => {
        try {
            const medicalexaminationresult = await axios.get(`https://dairy-company-server.onrender.com/medical?page=${page}`);
            setmedicalexamdata(medicalexaminationresult.data.data);
            setTotalPageMedicalExam(medicalexaminationresult.data.totalPages);

        }
        catch (err) {
            console.log(err)
            setError(err);
        }
    }
    //get all medical data
    const getallmedicaldata = async () => {
        try {
            const allmedicalresult = await axios.get(`https://dairy-company-server.onrender.com/medical/all`);
            setallmedicaldata(allmedicalresult.data.data);
            console.log('first',allmedicaldata)
        }
        catch (err) {
            console.log(err)
            setError(err);
        }
    }
    //get milk
    const getMilkdata = async (page) => {
        try {
            const milkresult = await axios.get(`https://dairy-company-server.onrender.com/milk?page=${page}`);
            setMilkdata(milkresult.data.data);
            setTotalPageMilk(milkresult.data.totalPages);
        }
        catch (err) {
            setError(err);
            console.log(err)
        }
    }
    //get all cows data
    const getallmilkdata = async () => {
        try {
            const allmilkresult = await axios.get(`https://dairy-company-server.onrender.com/milk/all`);
            setallmilkdata(allmilkresult.data.data);
        }
        catch (err) {
            console.log(err)
            setError(err);
        }
    }



    useEffect(() => {
        getcowsbirthdata();
        getmedicalexamdata();
        getallmedicaldata();
        getMilkdata();
        getallmilkdata();
        getcowsdata();
        getallcowsdata();
    }, []);

    return (
        <datacontext.Provider value={{
            getcowsdata,
            getcowsbirthdata,
            getmedicalexamdata,
            getallmedicaldata,
            getMilkdata,
            getallmilkdata,
            getallcowsdata,
            allcowsdata,
            cowsdata,
            cowsbirthdata,
            medicalexamdata,
            allmedicaldata,
            Milkdata,
            allmilkdata,
            totalPageCows,
            totalPageCowsBirth,
            totalPageMilk,
            totalPageMedicalExam,
            Error,
        }} >
            {children}
        </datacontext.Provider>
    )
}

export { Mycontextprovider, datacontext } 