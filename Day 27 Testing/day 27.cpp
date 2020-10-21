
class TestDataEmptyArray {
public:
    static vector<int> get_array() {
        // complete this function
         return {};
    }

};

class TestDataUniqueValues {
public:
    static vector<int> get_array() {
        // complete this function
        return {1,2};
    }

    static int get_expected_result() {
        // complete this function
         return 0;
    }

};

class TestDataExactlyTwoDifferentMinimums {
public:
    static vector<int> get_array() {
        // complete this function
          return {2,1,1};
    }

    static int get_expected_result() {
        // complete this function
        return 1;
    }

};

