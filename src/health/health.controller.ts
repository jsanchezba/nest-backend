import { Controller, Get } from '@nestjs/common'
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus'

@Controller('health')
export class HealthController {
    constructor(private health: HealthCheckService, private http: HttpHealthIndicator) {}

    @Get()
    @HealthCheck()
    healthCheck() {
        return this.health.check([
            () => this.http.pingCheck('local', 'http://localhost:3000'),
            () => this.http.pingCheck('service', 'http://localhost:3001'),
        ])
    }
}
