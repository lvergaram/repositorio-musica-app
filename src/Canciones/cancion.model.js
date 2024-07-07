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

const update = async(id, updateSong) => {
  try {
    const {titulo,artista,tono} = updateSong
    const query = {
      text:`
        UPDATE CANCIONES
        SET 
          titulo = $2,
          artista = $3,
          tono = $4
        WHERE id = $1
        RETURNING *
      `,
      values:[id, titulo,artista,tono]
    }
    const {rows:response} = await ddbb.query(query)
    return response[0]
  } catch (error) {
    throw error
  }
} 

const remove = async(id) => {
  try {
    const query = {
      text:`
        DELETE FROM CANCIONES
        WHERE ID = $1
        RETURNING *
      `,
      values:[id]
    }
    const {rows:response} = await ddbb.query(query)
    return response[0]
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