import { NestMiddleware, Next ,Res , Req} from "@nestjs/common";
import * as jwt from "jsonwebtoken"

export class LoggerMiddleware implements NestMiddleware {
    use(@Req() req: any,@Res() res: any , @Next() Next: any) {
      const token = req.headers.authorization;
      if (token) {
        try {
        const result = jwt.verify(token, 'secret_key');
          Next();
        } catch (error) {
          res.send("token salah")
        }
      } else {
        res.send("token tidak ada")
      }
    }
  }