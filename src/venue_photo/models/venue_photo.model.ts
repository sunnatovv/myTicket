import { Column, DataType, Model } from "sequelize-typescript"

interface IVenuePhotoCreationAttr {
    url:string
}
export class VenuePhoto extends Model<VenuePhoto,IVenuePhotoCreationAttr>{
      @Column({
    type: DataType.STRING,
  })
  url:string
}
