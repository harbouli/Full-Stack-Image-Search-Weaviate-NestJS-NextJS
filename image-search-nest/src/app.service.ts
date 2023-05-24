import { HttpStatus, Injectable } from '@nestjs/common';
import weaviate, { WeaviateClient } from 'weaviate-ts-client';

@Injectable()
export class AppService {
  private readonly client: WeaviateClient;

  constructor() {
    this.client = weaviate.client({
      scheme: 'http',
      host: 'localhost:8080',
    });
  }

  async addToDatabase(b64: string, fileName: string) {
    await this.client.data
      .creator()
      .withClassName('Images')
      .withProperties({
        image: b64,
        text: fileName,
      })
      .do();
    return { statu: HttpStatus.CREATED, message: 'Added New Image' };
  }
  async getNearImage(image: string) {
    const resImage = await this.client.graphql
      .get()
      .withClassName('Images')
      .withFields('image')
      .withNearImage({ image, certainty: 0.8 })
      .withLimit(2)
      .do();
    const imgs = await resImage.data.Get.Images;
    console.log(imgs);
    return imgs;
  }
}
