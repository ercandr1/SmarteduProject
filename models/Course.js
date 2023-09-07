const mongoose = require('mongoose');
const slugify = require('slugify')
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true, //tek bı tane
    required: true, // boş kalamaz
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category'
  }
});

// Şema geçerliliğini kontrol etmeden önce 'validate' olayına bir ön işlem ekliyoruz
CourseSchema.pre('validate', function(next){
  // 'name' alanını kullanarak bir slug oluşturuyoruz
  this.slug = slugify(this.name, {
    lower: true,
    strict: true
  });
  // Devam etmek için 'next' işlevini çağırıyoruz
  next();
});



const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;