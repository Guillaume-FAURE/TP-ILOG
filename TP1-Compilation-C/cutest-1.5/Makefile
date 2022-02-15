ar: CuTest.o
	ar -r libcutest.a CuTest.o
make: CuTest.o AllTests.o CuTestTest.o 
	gcc -o tests CuTest.o AllTests.o CuTestTest.o 
clean:
	rm -f *.a *.o tests
test: tests
	./tests
depend: rules.mk
	gcc -MM *.c > rules.mk

all: clean ar make

CC = gcc
-include rules.mk


