#include <stdio.h>
#include "message.h"
#include "print.h"

int main() {
	char *msg = getMessage();
	println(msg);

	return 0;
}

