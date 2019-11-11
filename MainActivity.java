FirebaseDatabase database = FirebaseDatabase.getInstance('/users/randomtext');
DatabaseReference myRef = database.getReference("message");

myRef.setValue("Hello, World!");
