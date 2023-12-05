import { inject } from '@loopback/context';
import { get, HttpErrors, param, Request, Response, RestBindings } from '@loopback/rest';
import { MsalService } from '../services/msalservice'; // Assuming you have a service for MSAL operations

export class GraphController {
  constructor(
    @inject('services.MsalService')
    protected msalService: MsalService,
  ) {}

  @get('/profile')
  async getProfile(
    @inject(RestBindings.Http.REQUEST) req: Request,
    @inject(RestBindings.Http.RESPONSE) res: Response,
  ): Promise<object> {
    // ... Your existing logic here, adjusted for TypeScript and LoopBack 4
    // For example, instead of `req.get('authorization')`, use `req.headers.authorization`
    // Error handling will be slightly different, using `throw new HttpErrors.Unauthorized('Your message')`

    // Example:

    if (!this.msalService.isAppOnlyToken(req)) {
      throw new HttpErrors.Unauthorized('This route requires a user token');
    }

    // Rest of your code logic here

    return {}; // Return the final response
  }
}
