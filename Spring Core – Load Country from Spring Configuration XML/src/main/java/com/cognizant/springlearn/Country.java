package com.cognizant.springlearn;

public class Country {
    private String code;
    private String name;

    public Country() {
        System.out.println("Inside Country Constructor.");
    }

    public String getCode() {
        System.out.println("Country.getCode() called");
        return code;
    }

    public void setCode(String code) {
        System.out.println("Country.setCode() called with value=" + code);
        this.code = code;
    }

    public String getName() {
        System.out.println("Country.getName() called");
        return name;
    }

    public void setName(String name) {
        System.out.println("Country.setName() called with value=" + name);
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country{code='" + getCode() + "', name='" + getName() + "'}";
    }
}
