JDK = /usr/lib/jvm/java-17-openjdk
INCLUDES = -I"$(JDK)/include/linux" -I"$(JDK)/include"
CFLAGS += $(INCLUDES)
OBJS = Display.o
TARGET = ../HelloJNI/libHelloNative.so

Display.o: Display.c Display.h

$(TARGET): $(OBJS)
	$(CXX) -shared -o $(TARGET) $(OBJS)

all: $(TARGET)

clean:
	$(RM) $(OBJS) $(TARGET)