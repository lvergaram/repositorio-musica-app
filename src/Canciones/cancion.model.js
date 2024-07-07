import {ddbb} from '../DATABASE/connection.ddbb.js'

const getAll = async() => {
  try {
    const query = {
      text:`
        SELECT * FROM CANCIONES
      `,
    }
    const {rows:response} = await ddbb.query(query)
    return response
  } catch (error) {
    throw error
  }
} 

const getOneById = async(id) => {
  try {
    const query = {
      text:`
        SELECT * FROM canciones
        WHERE id = $1
      `,
      values:[+id]
    }
    const {rows:response} = await ddbb.query(query)
    return response[0]
  } catch (error) {
    throw error
  }
} 

const create = async(newSong) => {
  try {
    const {titulo,artista,tono} = newSong
    const query = {
      text:`
        INSERT INTO canciones(titulo,artista,tono) 
        VALUES
        ($1,$2,$3)
        RETURNING *
      `,
      values:[titulo,artista,tono]
    }
    const {rows:response} = await ddbb.query(query)
    return response[0]
  } catch (error) {
    throw error
  }
} 

const update = async() => {
  try {
    const query = {
      text:`
        
      `,
      values:[]
    }
    const {rows:response} = await ddbb.query(query)
    return response
  } catch (error) {
    throw error
  }
} 

const remove = async() => {
  try {
    const query = {
      text:`
        
      `,
      values:[]
    }
    const {rows:response} = await ddbb.query(query)
    return response
  } catch (error) {
    throw error
  }
} 



export const cancionModel = {
  getAll,
  getOneById,
  create,
  update,
  remove
}