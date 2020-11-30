class Boundary {
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
    } 
    show() { 
        stroke(255);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }


    look (walls) {
        for (let ray of this.rays) {
            let closest = null;
            for (let wall of walls){

                const pt = ray.cast(wall);
                if (pt) {
                    const d = p5.Vector.dist(this.pos, pt);
                    if(d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }
 
}