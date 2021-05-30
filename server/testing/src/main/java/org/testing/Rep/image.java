package org.testing.Rep;

public class image {
    String name;

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "image{" +
                "name='" + name + '\'' +
                '}';
    }

    public void setName(String name) {
        this.name = name;
    }
}
