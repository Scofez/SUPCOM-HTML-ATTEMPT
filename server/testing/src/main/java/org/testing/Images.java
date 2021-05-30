package org.testing;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.testing.Rep.image;

@Path("images")
public class Images
{

    @GET
    @Path("image1")
    @Produces(MediaType.APPLICATION_JSON)
    public Response img1() {
        image img = new image();
       img.setName("images/cookies.JPG");
        return Response.status(200).header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers",
                        "origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods",
                        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .entity(img)
                .build();
    }

    @GET
    @Path("image2")
    @Produces(MediaType.APPLICATION_JSON)
    public Response img2() {
        image img = new image();
        img.setName("images/food.JPG");
        return Response.status(200).header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers",
                        "origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods",
                        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .entity(img)
                .build();
    }
}
