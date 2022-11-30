package routes

import (
	"github.com/fitness-health-app/health-app/ProjectSourceCode/server/controllers"
	"github.com/fitness-health-app/health-app/ProjectSourceCode/server/middleware"
	"github.com/gin-gonic/gin"
)

type AuthRouteController struct {
	authController controllers.AuthController
}

func NewAuthRouteController(authController controllers.AuthController) AuthRouteController {
	return AuthRouteController{authController}
}

func (rc *AuthRouteController) AuthRoute(rg *gin.RouterGroup) {
	router := rg.Group("/auth")

	router.POST("/register", rc.authController.SignUpUser)
	router.POST("/login", rc.authController.SignInUser)
	router.POST("/update", rc.authController.UpdateCredentialUser)
	router.GET("/refresh", rc.authController.RefreshAccessToken)
	router.GET("/logout", middleware.DeserializeUser(), rc.authController.LogoutUser)
}
