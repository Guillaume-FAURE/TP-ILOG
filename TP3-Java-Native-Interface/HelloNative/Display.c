#include "Display.h"

JNIEXPORT void JNICALL Java_Display_displayLine(JNIEnv *env, jobject pThis,jint jLine, jstring jstrMessage){
    const char *msg = (*env)->GetStringUTFChars(env, jstrMessage, 0);
    printf("line %d : %s\n",jLine, msg);
    (*env)->ReleaseStringUTFChars(env, jstrMessage, msg);
}

int main(){
    Java_Display_display();
    return 0;
}
