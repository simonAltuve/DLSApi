class BaseRepository{
    constructor(model){
        this.model = model;
    }

    async get(id){
        return await this.model.findById(id);
    }

    async getAll(){
        //los comentarios abajo son para paginar el resultado del find
        //pageSize = 5, pageNum = 1 estos son los parametros
        //const skips = pageSize * (pageNum - 1);
        return await this.model.find()
        //.skip(skips)
        //.limit(pageSize);
    }

    async create(entity){
        return await this.model.create(entity);
    }

    async update(id, entity){
        return await this.model.findByIdAndUpdate(id, entity, {new: true});
    }

    async delete(id){
        await this.model.findByIdAndDelete(id);

        return true;
    }
}

module.exports = BaseRepository;