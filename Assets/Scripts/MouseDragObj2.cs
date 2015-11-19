using UnityEngine;
using System.Collections;

public class MouseDragObj2 : MonoBehaviour
{

/*Let's make a public Camera variable so that in the editor we can choose what camera this script should take into account.*/

        public Camera mainCamera;


/*Our start function should be making sure that the main camera variable is set to something. If it's not then we should try and find something to take its place. If there is nothing that we can find then we just throw an error.*/

        void Start ()
        {
                if(mainCamera == null)
                {

/*If the mainCamera is set to null, then we start looking for a camera. The main camera has a default name of "Main Camera", so we look for that.*/

                mainCamera = GameObject.Find("Main Camera").GetComponent<Camera>();

/*If that is null we check Camera.mainCamera, which returns the camera with a tag of Main Camera*/

                        if(mainCamera == null)
                        {
                                mainCamera = Camera.main;
                        }


/*If the mainCamera is still set to null then we throw an error because there is no other camera that we know to look for*/

                if(mainCamera == null)
                {
                        Debug.LogError("No camera designated as main game camera. Either set camera manually in editor or set tag to Main Camera");
                        Debug.Break();
                        }
                }

/*Then we move the object to the center of the screen*/

                transform.position = new Vector3(mainCamera.transform.position.x, mainCamera.transform.position.y - 8, mainCamera.transform.position.z );
        }


/*In the update function we want to find where the object would be in relation to the mouse, and then we want to ease the object into that position*/

        void Update ()
        {
                Vector3 mousePosition = Input.mousePosition;

/*The Z of the mousePosition is 0, so if we just project the mouse position to the world it will show up ontop of the camera, so if we set to to 60, it will project the position outwards 60 units, this is useful because in this case, we keep the main character 60 units away from the camera at all times.*/

                mousePosition.z = 4;


/*Now we want to make sure that the object doesn't go off the screen. This next section makes sure of that by comparing the mouse position to boundaries created in the code*/

                mousePosition.x = Mathf.Max(Screen.width * 0.05f, Mathf.Min(mousePosition.x, Screen.width * 0.95f));
                mousePosition.y = Mathf.Max(Screen.height * 0.05f, Mathf.Min(mousePosition.y, Screen.height * 0.95f));

/*We then project the mouse into world space and smoothly transition the position of the object to the mouse by using Vector3.Lerp which stands for linear interpolation*/

                mousePosition = mainCamera.ScreenToWorldPoint(mousePosition);

                transform.position = Vector3.Lerp(transform.position, mousePosition, 0.4f);
        }
}
