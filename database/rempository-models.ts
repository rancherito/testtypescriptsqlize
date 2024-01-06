//import photo
import {PhotoModel} from '../models/Photo'
//database
import {AppDataSource} from './data-source'

//make repo photo
const PhotoRepo = AppDataSource.getRepository(PhotoModel)

export default PhotoRepo