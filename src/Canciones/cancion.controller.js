import { cancionModel } from "./cancion.model.js";

const getAll = async(req,res) => {
  try {
    const response = await cancionModel.getAll()
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ok:false})
  }
}

const getOneById = async(req,res) => {
  try {
    const {id} = req.params
    const response = await cancionModel.getOneById(id)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ok:false})
  }
}

const create = async(req,res) => {
  try {
    console.log(req.body)
    if (!req.body.titulo || !req.body.artista, !req.body.tono){
      return res.status(400).json({ok:false, msg:'se requiere titulo,artista y tono'})
    }
    const newSong = req.body
    const response = await cancionModel.create(newSong)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ok:false})
  }
}


export const cancionController = {
  getAll,
  getOneById,
  create
}