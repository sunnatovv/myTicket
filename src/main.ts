import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start = async () => {
  try {
    const PORT = process.env.port;
    console.log(PORT);

    const app = await NestFactory.create(AppModule);
    app.listen(PORT, () => {
      console.log(`dastur ${PORT}-portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
