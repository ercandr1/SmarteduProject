const mongoose = require('mongoose');
var slugify = require('slugify')
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true, //tek bı tane
    required: true, // boş kalamaz
  },

  slug: {
    type: String,
    unique: true
  }
});

// Şema geçerliliğini kontrol etmeden önce 'validate' olayına bir ön işlem ekliyoruz
CategorySchema.pre('validate', function(next){
  // 'name' alanını kullanarak bir slug oluşturuyoruz
  this.slug = slugify(this.name, {
    lower: true,
    strict: true
  });
  // Devam etmek için 'next' işlevini çağırıyoruz
  next();
});



const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;