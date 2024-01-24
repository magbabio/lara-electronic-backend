const multer = require('multer')

const IMAGE_FILE_TYPES = {
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
  'image/png': 'png',
}

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = IMAGE_FILE_TYPES[file.mimetype]
    let error = new Error('Invalid image type')
    if (isValid) {
      error = null
    }
    cb(error, 'public/images')
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.split(' ').join('-')
    const extension = IMAGE_FILE_TYPES[file.mimetype]
    cb(null, `${fileName}-${Date.now()}.${extension}`)
  }
})

const imageUpload = multer({ storage: imageStorage })

module.exports = {
  imageUpload,
}