import Doctor from "../models/Doctor.js";

const postDoctor = async (req, res) => {
    const { name, description, opdTimings, speciality } = req.body;
    try{
        const doctor = await Doctor.create({ name, description,opdTimings, speciality });
    res.status(201).json({
        success: true,
        message: "Doctor created successfully",
        data : doctor
    })
    }
    catch(error){
        res.status(404).json({
            success: false,
            message: "Doctor creation failed",
            error: error.message
        })
    }
}

const getDoctor = async (req, res) => {
    try{
        const doctor = await Doctor.find();
        res.status(200).json({
            success: true,
            message: "Doctor fetched successfully",
            data : doctor
        })
    }
    catch(error){
        res.status(404).json({
            success: false,
            message: "Doctor fetching failed",
            error: error.message
        })
    }
}

const getDoctorById = async (req, res) => {
    const { id } = req.params;
    try{
        const doctor = await Doctor.findById(id);
        res.status(200).json({
            success: true,
            message: "Doctor fetched successfully",
            data : doctor
        })
    }
    catch(error){
        res.status(404).json({
            success: false,
            message: "Doctor fetching failed",
            error: error.message
        })
    }
}

const updateDoctor = async (req, res) => {
    const { id } = req.params;
    const { name, description, opdTimings, speciality } = req.body;
    try{
        const doctor = await Doctor.findByIdAndUpdate(id, { name, description, opdTimings, speciality });
        res.status(200).json({
            success: true,
            message: "Doctor updated successfully",
            data : doctor
        })
    }
    catch(error){
        res.status(404).json({
            success: false,
            message: "Doctor updating failed",
            error: error.message
        })
    }
}

const deleteDoctor = async (req, res) => {
    const { id } = req.params;
    try{
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Doctor deleted successfully"
        })
    }
    catch(error){
        res.status(404).json({
            success: false,
            message: "Doctor deletion failed",
            error: error.message
        })
    }
}
export { postDoctor, getDoctor, getDoctorById, updateDoctor, deleteDoctor };