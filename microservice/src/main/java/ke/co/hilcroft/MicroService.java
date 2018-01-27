package ke.co.hilcroft;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpHeaders;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.mongo.MongoClient;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.templ.JadeTemplateEngine;

public class MicroService extends AbstractVerticle {

  @Override
  public void start() throws Exception {

    final MongoClient mongo = MongoClient.createShared(vertx, new JsonObject().put("db_name", "insurance"));

    final JadeTemplateEngine jade = JadeTemplateEngine.create();

    final Router router = Router.router(vertx);

    router.route().handler(BodyHandler.create());

    router.get("/").handler(ctx -> {

      ctx.put("title", "Vert.x Web");
      jade.render(ctx, "templates/index", res -> {
        if (res.succeeded()) {
          ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "text/html").end(res.result());
        } else {
          ctx.fail(res.cause());
        }
      });
    });


    router.get("/api/vehicle").handler(ctx -> {

      mongo.find("vehicles", new JsonObject(), lookup -> {
        // error handling
        if (lookup.failed()) {
          ctx.fail(lookup.cause());
          return;
        }

        final JsonArray json = new JsonArray();
        for (JsonObject o : lookup.result()) {
          json.add(o);
        }

        ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");

        ctx.response().end(json.encode());
      });
    });
    router.get("/api/vehicle/:name").handler(ctx -> {
        mongo.find("vehicles", new JsonObject().put("vehicle", ctx.request().getParam("name")), lookup -> {
          if (lookup.failed()) {
            ctx.fail(lookup.cause());
            return;
          }
          final JsonArray json = new JsonArray();
          for (JsonObject o : lookup.result()) {
            json.add(o);
          }

          ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
          ctx.response().end(json.encode());
        });
      });
    router.get("/api/vehicle/model/:name").handler(ctx -> {
        mongo.find("vehicles", new JsonObject().put("model", ctx.request().getParam("name")), lookup -> {
          if (lookup.failed()) {
            ctx.fail(lookup.cause());
            return;
          }
          final JsonArray json = new JsonArray();
          for (JsonObject o : lookup.result()) {
            json.add(o);
          }
          ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
          ctx.response().end(json.encode());
        });
      });
    router.get("/api/vehicle/model_id/:id").handler(ctx -> {
        mongo.find("vehicles", new JsonObject().put("model_id", ctx.request().getParam("id")), lookup -> {
          if (lookup.failed()) {
            ctx.fail(lookup.cause());
            return;
          }
          final JsonArray json = new JsonArray();
          for (JsonObject o : lookup.result()) {
            json.add(o);
          }
          ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
          ctx.response().end(json.encode());
        });
      });
    router.get("/api/county/city").handler(ctx -> {
        mongo.find("counties", new JsonObject(), lookup -> {
          if (lookup.failed()) {
            ctx.fail(lookup.cause());
            return;
          }
          final JsonArray json = new JsonArray();
          for (JsonObject o : lookup.result()) {
            json.add(o);
          }
          ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
          ctx.response().end(json.encode());
        });
      });
      router.get("/api/county/city/:name").handler(ctx -> {
 
          mongo.find("counties", new JsonObject().put("county/city", ctx.request().getParam("name")), lookup -> {
     
            if (lookup.failed()) {
              ctx.fail(lookup.cause());
              return;
            }


            final JsonArray json = new JsonArray();
            for (JsonObject o : lookup.result()) {
              json.add(o);
            }

            ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
       
            ctx.response().end(json.encode());
          });
        });
      router.get("/api/county/city_id/:id").handler(ctx -> {
          mongo.find("counties", new JsonObject().put("city_id", ctx.request().getParam("id")), lookup -> {
            if (lookup.failed()) {
              ctx.fail(lookup.cause());
              return;
            }

            final JsonArray json = new JsonArray();
            for (JsonObject o : lookup.result()) {
              json.add(o);
            }
            ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
            ctx.response().end(json.encode());
          });
        });
      router.get("/api/county/subcounty").handler(ctx -> {
   
          mongo.find("subcounties", new JsonObject(), lookup -> {
    
            if (lookup.failed()) {
              ctx.fail(lookup.cause());
              return;
            }

            final JsonArray json = new JsonArray();
            for (JsonObject o : lookup.result()) {
              json.add(o);
            }

            ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
            ctx.response().end(json.encode());
          });
        });
      router.get("/api/county/subcounty/:name").handler(ctx -> {
       
          mongo.find("subcounties", new JsonObject().put("subcounty", ctx.request().getParam("name")), lookup -> {
            if (lookup.failed()) {
              ctx.fail(lookup.cause());
              return;
            }
            final JsonArray json = new JsonArray();
            for (JsonObject o : lookup.result()) {
              json.add(o);
            }
            ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
            ctx.response().end(json.encode());
          });
        });
   
      router.get("/api/county/subcounty_id/:id").handler(ctx -> {
          
          mongo.find("subcounties", new JsonObject().put("subCounty_id", ctx.request().getParam("id")), lookup -> {
            if (lookup.failed()) {
              ctx.fail(lookup.cause());
              return;
            }
            final JsonArray json = new JsonArray();
            for (JsonObject o : lookup.result()) {
              json.add(o);
            }
            ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, "application/json");
            ctx.response().end(json.encode());
          });
        });
    router.route().handler(StaticHandler.create());

    vertx.createHttpServer().requestHandler(router::accept).listen(7200);
  }
}