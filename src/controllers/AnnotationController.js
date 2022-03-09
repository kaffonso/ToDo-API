const mongoose = require('mongoose');
const Annotations = require('../models/AnnotationData');

module.exports = {

  async read(req, res){
      const annotationList = await Annotations.find();
    
      return res.json(annotationList)
  },

  async create(req, res){
    const { title, notes, priority } =  req.body;

    if (!title || !notes){
      return res.status(400).json({error : "Title/Description not Provided"});
    };

    const annotationCreated = await Annotations.create({
      title,
      notes,
      priority
    });
    
    return res.json(annotationCreated);
  },

  async delete(req, res){
    const { id } = req.params;
    console.log(id)

    const annotationDeleted = await Annotations.findOneAndDelete({_id: id});

    if(annotationDeleted){
      return res.json(annotationDeleted)
    }

    return res.status(401).json({ error : 'Register not Found'})

  }
}